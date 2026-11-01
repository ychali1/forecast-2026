// ---------------------------------------------------------------------------
// YOUR SITE SETTINGS. This is the only file you need to edit (plus your CSVs).
// Edit it on github.com: open this file, click the pencil icon, change the
// text between the quotation marks, then click "Commit changes".
// ---------------------------------------------------------------------------

window.SITE_CONFIG = {

  // The name shown at the top of your site. A nickname or made-up forecaster
  // name is fine and recommended. Do not put your real name, email, photo,
  // or anything else that identifies you on this site.
  forecaster_name: "Charlie",

  // One short line under the name (optional).
  tagline: "Polls, fundamentals, and a healthy fear of herding",

  // A plain-language description of YOUR model, in your own words. Each line in
  // quotes is one paragraph, followed by a comma.
  method: [
    "This forecast is built in layers, following the structure of Nate Silver's FLIPR model. Every race starts from a fundamentals prior (district partisanship, the national vote, incumbency, fundraising and past results). Senate races and about 100 House races with district polls then blend in a quality-weighted poll average; sponsored internal polls are corrected for their historical 2.9-point bias toward their own side.",
    "The national environment blends the generic-ballot average (shaded about 0.75 points toward Republicans, half the size of past midterm polling misses) with a midterm fundamentals model built on presidential approval, plus a small nudge from what the Senate polls imply.",
    "Uncertainty comes from 40,000 simulated elections with a shared national error, a shared state-level error and race-specific error, all with fat tails, sized from backtests. These give the win probabilities, 80% ranges and seat distributions."
  ],

  // Your data files. Leave these alone unless you renamed your files.
  forecast_file: "forecast.csv",
  sims_file: "seat_sims.csv",

  // Geographic hex map of the House districts (The Downballot, via fourthirtyfive).
  house_hexmap: "data/house_hexmap_2026.json",

  // Course links. Leave these as they are.
  links: {
    class_forecast: "https://kevinmdeluca.com/forecast/class/",
    tracker: "https://kevinmdeluca.com/forecast/",
    gallery: "https://kevin-deluca-polisci.github.io/plsc2219-forecasts/gallery.html"
  }
};
