---
title: "Adaptive Burpee Training Plan: 0 to 100"
date: 2025-05-15
draft: false
tags: ["fitness"]
summary: "A structured training plan to help me reach 100 burpees."
---

## Types of Burpees

### Full Burpees

Perform the movement with both push-up and jump.

### Wall Burpees

Perform the movement pushing off a wall instead of the floor.

### Elevated Burpees

Place hands on an elevated surface (chair, bench) instead of the floor for the push-up part.

### Modified Burpees (No Push-up/Jump)

You can skip the push-up component or the final jump if needed. Step back and step forward instead of kicking/jumping feet.

## Training Plan

{{% rawhtml %}}

<style>
  .plan-table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 1.5em; /* Generous spacing */
    font-size: 0.9em;
    color: #e0e0e0; /* Light text color for the table overall */
  }
  .plan-table th, .plan-table td {
    border: 1px solid #555; /* Darker border, visible on dark backgrounds */
    padding: 8px;
    text-align: left;
    vertical-align: top;
  }
  .plan-table th {
    background-color: #333; /* Dark background for headers */
    color: #f5f5f5;       /* Light text for headers */
    font-weight: bold;
  }
  .plan-table tr { /* Base style for table rows */
    background-color: #222; /* Default dark background for rows */
  }
  .plan-table tr:nth-child(even) {
    background-color: #2a2a2a; /* Slightly different dark for even rows */
  }
  .plan-table td { /* Ensure td text is light */
    color: #e0e0e0;
  }
  .btn-update, .btn-reset {
    color: white;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    margin-right: 10px;
    margin-bottom: 15px;
    font-weight: bold;
  }
  .btn-update {
    background-color: #28a745; /* Green for update */
  }
  .btn-reset {
    background-color: #dc3545; /* Red for reset */
  }
  #dateInfo { /* Corrected selector and updated for dark theme */
    padding: 12px;
    background-color: #333; /* Darker background */
    border-left: 6px solid #2196F3; /* Blue accent */
    margin-bottom: 20px;
    border-radius: 4px;
    color: #e0e0e0; /* Light text */
  }
  /*
    Styling for Markdown Content (after rawhtml):
    To achieve generous paragraph spacing for the markdown content below (Implementation Guidelines, etc.),
    you'll need to use your theme's capabilities (Hugo with Tailwind CSS).
    This embedded <style> block only affects content within the shortcode.
    Consider:
    1. Using Tailwind utility classes directly in your markdown if your processor supports it (e.g., <p class="mb-4">).
    2. Customizing your Tailwind configuration (tailwind.config.js) to apply styles to markdown elements
       (e.g., via the @tailwindcss/typography plugin).
    3. Adding global styles to your `assets/css/main.css` file, like:
       `.content p { margin-bottom: 1.25em; }` (assuming your content is wrapped in a div with class .content)
  */
</style>

<div id="dateInfo">The dates below start from May 14, 2025. Click "Update Dates" to adjust to the current date.</div>
<button id="updateDates" class="btn-update">Update Dates to Start Today</button>
<button id="resetDates" class="btn-reset">Reset to Original Dates</button>

<table class="plan-table" id="burpeeTable">
  <thead>
    <tr>
      <th>Week</th>
      <th>Dates</th>
      <th>Daily Target</th>
      <th>Type</th>
      <th>Sets × Reps</th>
      <th>Weekly Total</th>
      <th>Time (min)</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td id="week1">May 14-20</td>
      <td>9</td>
      <td>Wall burpees</td>
      <td>3×3</td>
      <td>45</td>
      <td>1-2 min</td>
      <td>Focus on form, hands on wall</td>
    </tr>
    <tr>
      <td>2</td>
      <td id="week2">May 21-27</td>
      <td>12</td>
      <td>Elevated burpees</td>
      <td>3×4</td>
      <td>60</td>
      <td>1-2 min</td>
      <td>Hands on chair/sturdy surface</td>
    </tr>
    <tr>
      <td>3</td>
      <td id="week3">May 28-Jun 3</td>
      <td>15</td>
      <td>Box burpees</td>
      <td>3×5</td>
      <td>75</td>
      <td>1-2 min</td>
      <td>Step back instead of jumping</td>
    </tr>
    <tr>
      <td>4</td>
      <td id="week4">Jun 4-10</td>
      <td>16</td>
      <td>Modified burpees</td>
      <td>2×8</td>
      <td>80</td>
      <td>1-2 min</td>
      <td>No push-up component yet</td>
    </tr>
    <tr>
      <td>5</td>
      <td id="week5">Jun 11-17</td>
      <td>18</td>
      <td>Modified burpees</td>
      <td>2×9</td>
      <td>90</td>
      <td>2 min</td>
      <td>Add planks 2×20s twice weekly</td>
    </tr>
    <tr>
      <td>6</td>
      <td id="week6">Jun 18-24</td>
      <td>20</td>
      <td>Modified burpees</td>
      <td>2×10</td>
      <td>100</td>
      <td>2 min</td>
      <td>Rest 30s between sets</td>
    </tr>
    <tr>
      <td>7</td>
      <td id="week7">Jun 25-Jul 1</td>
      <td>24</td>
      <td>Modified burpees</td>
      <td>2×12</td>
      <td>120</td>
      <td>2-3 min</td>
      <td>Begin push-up practice separately</td>
    </tr>
    <tr>
      <td>8</td>
      <td id="week8">Jul 2-8</td>
      <td>16</td>
      <td>Full burpees</td>
      <td>2×8</td>
      <td>80</td>
      <td>2-3 min</td>
      <td>First week of full burpees!</td>
    </tr>
    <tr>
      <td>9</td>
      <td id="week9">Jul 9-15</td>
      <td>20</td>
      <td>Full burpees</td>
      <td>2×10</td>
      <td>100</td>
      <td>2-3 min</td>
      <td>Focus on breathing rhythm</td>
    </tr>
    <tr>
      <td>10</td>
      <td id="week10">Jul 16-22</td>
      <td>24</td>
      <td>Full burpees</td>
      <td>2×12</td>
      <td>120</td>
      <td>2-3 min</td>
      <td>Add 5 push-ups twice weekly</td>
    </tr>
    <tr>
      <td>11</td>
      <td id="week11">Jul 23-29</td>
      <td>27</td>
      <td>Full burpees</td>
      <td>3×9</td>
      <td>135</td>
      <td>3 min</td>
      <td>Build endurance with 3 sets</td>
    </tr>
    <tr>
      <td>12</td>
      <td id="week12">Jul 30-Aug 5</td>
      <td>30</td>
      <td>Full burpees</td>
      <td>3×10</td>
      <td>150</td>
      <td>3 min</td>
      <td>First milestone reached!</td>
    </tr>
    <tr>
      <td>13</td>
      <td id="week13">Aug 6-12</td>
      <td>36</td>
      <td>Full burpees</td>
      <td>3×12</td>
      <td>180</td>
      <td>3 min</td>
      <td>Consider splitting into AM/PM sessions</td>
    </tr>
    <tr>
      <td>14</td>
      <td id="week14">Aug 13-19</td>
      <td>45</td>
      <td>Full burpees</td>
      <td>3×15</td>
      <td>225</td>
      <td>3-4 min</td>
      <td>Increase hydration on training days</td>
    </tr>
    <tr>
      <td>15</td>
      <td id="week15">Aug 20-26</td>
      <td>42</td>
      <td>Full burpees</td>
      <td>3×14</td>
      <td>210</td>
      <td>3-4 min</td>
      <td>Deload week - slight reduction</td>
    </tr>
    <tr>
      <td>16</td>
      <td id="week16">Aug 27-Sep 2</td>
      <td>50</td>
      <td>Full burpees</td>
      <td>2×25</td>
      <td>250</td>
      <td>3-4 min</td>
      <td>Half-century milestone!</td>
    </tr>
    <tr>
      <td>17</td>
      <td id="week17">Sep 3-9</td>
      <td>60</td>
      <td>Full burpees</td>
      <td>2×30</td>
      <td>300</td>
      <td>4 min</td>
      <td>Try splitting into morning/evening</td>
    </tr>
    <tr>
      <td>18</td>
      <td id="week18">Sep 10-16</td>
      <td>70</td>
      <td>Full burpees</td>
      <td>2×35</td>
      <td>350</td>
      <td>4 min</td>
      <td>Recovery becomes crucial now</td>
    </tr>
    <tr>
      <td>19</td>
      <td id="week19">Sep 17-23</td>
      <td>80</td>
      <td>Full burpees</td>
      <td>2×40</td>
      <td>400</td>
      <td>4-5 min</td>
      <td>Last week before major milestone</td>
    </tr>
    <tr>
      <td>20</td>
      <td id="week20">Sep 24-30</td>
      <td>50+max</td>
      <td>Full burpees</td>
      <td>50+AMRAP</td>
      <td>400+</td>
      <td>4-5 min</td>
      <td>Do 50 then max effort (+5-10)</td>
    </tr>
    <tr>
      <td>21</td>
      <td id="week21">Oct 1-7</td>
      <td>55</td>
      <td>Full burpees</td>
      <td>3×18+1</td>
      <td>275</td>
      <td>5 min</td>
      <td>Split into 3 sets throughout day</td>
    </tr>
    <tr>
      <td>22</td>
      <td id="week22">Oct 8-14</td>
      <td>60</td>
      <td>Full burpees</td>
      <td>3×20</td>
      <td>300</td>
      <td>5 min</td>
      <td>Focus on consistent pace</td>
    </tr>
    <tr>
      <td>23</td>
      <td id="week23">Oct 15-21</td>
      <td>65</td>
      <td>Full burpees</td>
      <td>3×21+2</td>
      <td>325</td>
      <td>5 min</td>
      <td>Note recovery between sets</td>
    </tr>
    <tr>
      <td>24</td>
      <td id="week24">Oct 22-28</td>
      <td>70</td>
      <td>Full burpees</td>
      <td>3×23+1</td>
      <td>350</td>
      <td>5 min</td>
      <td>70% of final goal!</td>
    </tr>
    <tr>
      <td>25</td>
      <td id="week25">Oct 29-Nov 4</td>
      <td>75</td>
      <td>Full burpees</td>
      <td>3×25</td>
      <td>375</td>
      <td>5 min</td>
      <td>Split into morning/noon/night</td>
    </tr>
    <tr>
      <td>26</td>
      <td id="week26">Nov 5-11</td>
      <td>80</td>
      <td>Full burpees</td>
      <td>4×20</td>
      <td>400</td>
      <td>5 min</td>
      <td>80% milestone reached!</td>
    </tr>
    <tr>
      <td>27</td>
      <td id="week27">Nov 12-18</td>
      <td>75</td>
      <td>Full burpees</td>
      <td>3×25</td>
      <td>375</td>
      <td>5 min</td>
      <td>Deload week - strategic recovery</td>
    </tr>
    <tr>
      <td>28</td>
      <td id="week28">Nov 19-25</td>
      <td>85</td>
      <td>Full burpees</td>
      <td>4×21+1</td>
      <td>425</td>
      <td>5 min</td>
      <td>Thanksgiving week - stay consistent</td>
    </tr>
    <tr>
      <td>29</td>
      <td id="week29">Nov 26-Dec 2</td>
      <td>90</td>
      <td>Full burpees</td>
      <td>3×30</td>
      <td>450</td>
      <td>5 min</td>
      <td>90% of goal!</td>
    </tr>
    <tr>
      <td>30</td>
      <td id="week30">Dec 3-9</td>
      <td>95</td>
      <td>Full burpees</td>
      <td>3×31+2</td>
      <td>475</td>
      <td>5 min</td>
      <td>Almost there!</td>
    </tr>
    <tr>
      <td>31</td>
      <td id="week31">Dec 10-16</td>
      <td>97</td>
      <td>Full burpees</td>
      <td>3×32+1</td>
      <td>485</td>
      <td>5 min</td>
      <td>Final preparation week</td>
    </tr>
    <tr>
      <td>32</td>
      <td id="week32">Dec 17-23</td>
      <td>100</td>
      <td>Full burpees</td>
      <td>4×25</td>
      <td>500</td>
      <td>5 min</td>
      <td>GOAL REACHED!</td>
    </tr>
    <tr>
      <td>33</td>
      <td id="week33">Dec 24-31</td>
      <td>100</td>
      <td>Full burpees</td>
      <td>Various</td>
      <td>500+</td>
      <td>5 min</td>
      <td>Maintenance week</td>
    </tr>
  </tbody>
</table>

<script>
  const originalDates = [
    "May 14-20", "May 21-27", "May 28-Jun 3", "Jun 4-10", "Jun 11-17",
    "Jun 18-24", "Jun 25-Jul 1", "Jul 2-8", "Jul 9-15", "Jul 16-22",
    "Jul 23-29", "Jul 30-Aug 5", "Aug 6-12", "Aug 13-19", "Aug 20-26",
    "Aug 27-Sep 2", "Sep 3-9", "Sep 10-16", "Sep 17-23", "Sep 24-30",
    "Oct 1-7", "Oct 8-14", "Oct 15-21", "Oct 22-28", "Oct 29-Nov 4",
    "Nov 5-11", "Nov 12-18", "Nov 19-25", "Nov 26-Dec 2", "Dec 3-9",
    "Dec 10-16", "Dec 17-23", "Dec 24-31"
  ];
  const originalStartDate = new Date(2025, 4, 14); // Month is 0-indexed (4 = May)

  function formatDate(date) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[date.getMonth()]} ${date.getDate()}`;
  }

  document.getElementById('updateDates').addEventListener('click', function() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, ..., 3 = Wednesday, ..., 6 = Saturday
    // Calculate days to the upcoming Wednesday. If today is Wednesday, start from today.
    // If dayOfWeek is 0 (Sun), daysToWednesday = 3 - 0 = 3.
    // If dayOfWeek is 1 (Mon), daysToWednesday = 3 - 1 = 2.
    // If dayOfWeek is 2 (Tue), daysToWednesday = 3 - 2 = 1.
    // If dayOfWeek is 3 (Wed), daysToWednesday = 3 - 3 = 0.
    // If dayOfWeek is 4 (Thu), daysToWednesday = 3 - 4 + 7 = 6.
    // If dayOfWeek is 5 (Fri), daysToWednesday = 3 - 5 + 7 = 5.
    // If dayOfWeek is 6 (Sat), daysToWednesday = 3 - 6 + 7 = 4.
    // Simplified: ( (3 - dayOfWeek) + 7) % 7
    const daysToWednesday = ( (3 - dayOfWeek + 7) % 7 );

    const startDate = new Date(today);
    startDate.setDate(today.getDate() + daysToWednesday);

    document.getElementById('dateInfo').textContent = `Dates updated to start from ${formatDate(startDate)}.`;

    for (let i = 1; i <= 33; i++) {
      const weekStartDate = new Date(startDate);
      weekStartDate.setDate(startDate.getDate() + (i - 1) * 7);

      const weekEndDate = new Date(weekStartDate);
      weekEndDate.setDate(weekStartDate.getDate() + 6);

      let dateText;
      if (weekStartDate.getMonth() === weekEndDate.getMonth()) {
        dateText = `${formatDate(weekStartDate)}-${weekEndDate.getDate()}`;
      } else {
        dateText = `${formatDate(weekStartDate)}-${formatDate(weekEndDate)}`;
      }

      const cell = document.getElementById(`week${i}`);
      if (cell) {
        cell.textContent = dateText;
      }
    }
  });

  document.getElementById('resetDates').addEventListener('click', function() {
    document.getElementById('dateInfo').textContent = `Dates reset to original start: ${formatDate(originalStartDate)}.`;
    for (let i = 1; i <= 33; i++) {
      const cell = document.getElementById(`week${i}`);
      if (cell) {
        cell.textContent = originalDates[i-1];
      }
    }
  });
</script>

{{% /rawhtml %}}
