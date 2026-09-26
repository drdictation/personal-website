import os
import json
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from google.oauth2 import service_account
from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import (
    DateRange,
    Dimension,
    Metric,
    RunReportRequest,
    OrderBy
)

def get_analytics_client():
    creds_json = os.environ.get("GA_CREDENTIALS_JSON")
    if creds_json:
        info = json.loads(creds_json)
        credentials = service_account.Credentials.from_service_account_info(
            info,
            scopes=["https://www.googleapis.com/auth/analytics.readonly"]
        )
    else:
        creds_path = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS", "ga_credentials.json")
        credentials = service_account.Credentials.from_service_account_file(
            creds_path,
            scopes=["https://www.googleapis.com/auth/analytics.readonly"]
        )
    return BetaAnalyticsDataClient(credentials=credentials)

def fetch_metrics(client, property_id):
    # 1. Total overview metrics for the last 7 days
    overview_req = RunReportRequest(
        property=f"properties/{property_id}",
        dimensions=[],
        metrics=[
            Metric(name="activeUsers"),
            Metric(name="sessions"),
            Metric(name="screenPageViews"),
            Metric(name="averageSessionDuration")
        ],
        date_ranges=[DateRange(start_date="7daysAgo", end_date="yesterday")]
    )
    overview_res = client.run_report(overview_req)
    
    users = 0
    sessions = 0
    page_views = 0
    avg_duration = 0.0
    if overview_res.rows:
        row = overview_res.rows[0]
        users = int(row.metric_values[0].value)
        sessions = int(row.metric_values[1].value)
        page_views = int(row.metric_values[2].value)
        avg_duration = round(float(row.metric_values[3].value), 1)

    # 2. Traffic Acquisition / Source (e.g. Google organic search, Direct, etc.)
    source_req = RunReportRequest(
        property=f"properties/{property_id}",
        dimensions=[Dimension(name="sessionDefaultChannelGroup")],
        metrics=[Metric(name="sessions")],
        date_ranges=[DateRange(start_date="7daysAgo", end_date="yesterday")],
        order_bys=[OrderBy(metric=OrderBy.MetricOrderBy(metric_name="sessions"), desc=True)],
        limit=5
    )
    source_res = client.run_report(source_req)
    sources = []
    for r in source_res.rows:
        sources.append({
            "channel": r.dimension_values[0].value,
            "sessions": int(r.metric_values[0].value)
        })

    # 3. Top pages viewed
    pages_req = RunReportRequest(
        property=f"properties/{property_id}",
        dimensions=[Dimension(name="pagePath")],
        metrics=[Metric(name="screenPageViews")],
        date_ranges=[DateRange(start_date="7daysAgo", end_date="yesterday")],
        order_bys=[OrderBy(metric=OrderBy.MetricOrderBy(metric_name="screenPageViews"), desc=True)],
        limit=5
    )
    pages_res = client.run_report(pages_req)
    pages = []
    for r in pages_res.rows:
        pages.append({
            "path": r.dimension_values[0].value,
            "views": int(r.metric_values[0].value)
        })

    # 4. Key events / Clicks
    events_req = RunReportRequest(
        property=f"properties/{property_id}",
        dimensions=[Dimension(name="eventName")],
        metrics=[Metric(name="eventCount")],
        date_ranges=[DateRange(start_date="7daysAgo", end_date="yesterday")],
        order_bys=[OrderBy(metric=OrderBy.MetricOrderBy(metric_name="eventCount"), desc=True)],
        limit=8
    )
    events_res = client.run_report(events_req)
    events = []
    for r in events_res.rows:
        name = r.dimension_values[0].value
        if name not in ["page_view", "session_start", "first_visit", "user_engagement"]:
            events.append({
                "name": name,
                "count": int(r.metric_values[0].value)
            })

    return {
        "users": users,
        "sessions": sessions,
        "page_views": page_views,
        "avg_duration": avg_duration,
        "sources": sources,
        "pages": pages,
        "events": events
    }

def format_email_body(data):
    sources_html = "".join([
        f"<li><strong>{s['channel']}</strong>: {s['sessions']} sessions</li>"
        for s in data["sources"]
    ]) or "<li>No session data recorded yet</li>"

    pages_html = "".join([
        f"<li><code>{p['path']}</code>: {p['views']} views</li>"
        for p in data["pages"]
    ]) or "<li>No page views recorded yet</li>"

    events_html = "".join([
        f"<li><strong>{e['name']}</strong>: {e['count']} times</li>"
        for e in data["events"]
    ]) if data["events"] else "<li>No custom click/interaction events yet</li>"

    html = f"""
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #2d3748; line-height: 1.6; margin: 0; padding: 20px; background-color: #f7fafc; }}
        .card {{ max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 10px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }}
        .header {{ background-gradient: linear-gradient(135deg, #1e3a8a, #2563eb); background-color: #1e3a8a; color: #ffffff; padding: 24px; text-align: center; }}
        .header h1 {{ margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.5px; }}
        .header p {{ margin: 6px 0 0; font-size: 13px; opacity: 0.85; }}
        .content {{ padding: 24px; }}
        .stats-grid {{ display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 24px; }}
        .stat-box {{ background: #f8fafc; border: 1px solid #edf2f7; border-radius: 8px; padding: 14px; text-align: center; }}
        .stat-number {{ font-size: 24px; font-weight: 700; color: #1e40af; margin-top: 4px; }}
        .stat-label {{ font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 600; letter-spacing: 0.5px; }}
        .section-title {{ font-size: 15px; font-weight: 600; color: #0f172a; margin: 20px 0 8px; border-bottom: 2px solid #e2e8f0; padding-bottom: 4px; }}
        ul {{ margin: 0 0 16px; padding-left: 20px; font-size: 14px; }}
        li {{ margin-bottom: 6px; }}
        .footer {{ text-align: center; font-size: 12px; color: #94a3b8; padding: 16px; border-top: 1px solid #f1f5f9; }}
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <h1>Weekly Website Analytics</h1>
          <p>Dr Chamara Basnayake (drchamarabasnayake.com)</p>
        </div>
        <div class="content">
          <div class="stats-grid">
            <div class="stat-box">
              <div class="stat-label">Active Visitors</div>
              <div class="stat-number">{data['users']}</div>
            </div>
            <div class="stat-box">
              <div class="stat-label">Total Visits</div>
              <div class="stat-number">{data['sessions']}</div>
            </div>
            <div class="stat-box">
              <div class="stat-label">Page Views</div>
              <div class="stat-number">{data['page_views']}</div>
            </div>
            <div class="stat-box">
              <div class="stat-label">Avg Duration</div>
              <div class="stat-number">{data['avg_duration']}s</div>
            </div>
          </div>

          <div class="section-title">🔍 How Visitors Found You (Traffic Sources)</div>
          <ul>{sources_html}</ul>

          <div class="section-title">📄 Most Viewed Pages</div>
          <ul>{pages_html}</ul>

          <div class="section-title">🖱️ Interactivity & Actions</div>
          <ul>{events_html}</ul>
        </div>
        <div class="footer">
          Automated weekly report sent directly from your Google Analytics 4 stream.
        </div>
      </div>
    </body>
    </html>
    """
    return html

def send_email(subject, html_content):
    sender_email = os.environ.get("GMAIL_USER")
    sender_pwd = os.environ.get("GMAIL_APP_PASSWORD")
    recipient_email = os.environ.get("REPORT_TO_EMAIL", sender_email)

    if not sender_email or not sender_pwd:
        raise ValueError("Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables.")

    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = f"Website Analytics <{sender_email}>"
    msg["To"] = recipient_email

    msg.attach(MIMEText(html_content, "html"))

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(sender_email, sender_pwd)
        server.sendmail(sender_email, recipient_email, msg.as_string())

def main():
    property_id = os.environ.get("GA_PROPERTY_ID", "556066686")
    print(f"Connecting to Google Analytics Property ID: {property_id}...")
    client = get_analytics_client()
    data = fetch_metrics(client, property_id)
    print("Report data fetched successfully:", data)
    
    html = format_email_body(data)
    subject = "📊 Your Weekly Website Summary - Dr Chamara Basnayake"
    print("Sending email...")
    send_email(subject, html)
    print("Email sent successfully!")

if __name__ == "__main__":
    main()
