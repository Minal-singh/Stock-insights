# Stock-insights

### Project Live on [https://stock-insights-sigma.vercel.app/]

### And if you like this project, then ADD a STAR ⭐️ to this project 👆

## How to Install and Run this project?

### Pre-Requisites:

1. Install Git Version Control
   [ https://git-scm.com/ ]

2. Install Node Latest Version
   [ https://nodejs.org/en/ ]

3. Install Python Latest Version
   [ https://www.python.org/downloads/ ]

4. Install Pip (Package Manager)
   [ https://pip.pypa.io/en/stable/installing/ ]

### Installation

**1. Navigate to directory where you want to save the project**

**2. Clone this project**

```
git clone https://github.com/Minal-singh/VIA.git
```

Then, Enter the project

```
cd Stock-insights
```

**3. Push data from json to mongodb**

Install Pymongo

```
pip install pymongo
```

Run the script

```
python data_processor.py
```

**4. Run Next Project**

Navigate to stock_insights

```
cd stock_insights
```

Install all dependency

```
npm install
```

Run the development server

```
npm run dev
```

## After running the Python script, you can directly access data from hosted api

| Endpoint                                                                                             | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| https://stock-insights-sigma.vercel.app/api/announcements                                            | Get announcements from all company                                                                                                                               |
| https://stock-insights-sigma.vercel.app/api/announcements/[SCRIP_CD]                                 | Get announcements from specific company (e.g. https://stock-insights-sigma.vercel.app/api/announcements/534816)                                                  |
| https://stock-insights-sigma.vercel.app/api/announcements?sort=asc                                   | Get announcements from all company sorted in oldest to newest order                                                                                              |
| https://stock-insights-sigma.vercel.app/api/announcements?sort=desc                                  | Get announcements from all company sorted in newest to oldest order                                                                                              |
| https://stock-insights-sigma.vercel.app/api/announcements/[SCRIP_CD]?sort=asc                        | Get announcements from specific company sorted in oldest to newest order                                                                                         |
| https://stock-insights-sigma.vercel.app/api/announcements/[SCRIP_CD]?sort=desc                       | Get announcements from specific company sorted in newest to oldest order                                                                                         |
| https://stock-insights-sigma.vercel.app/api/announcements?sd=[yyyy-mm-dd]&ed=[yyyy-mm-dd]            | Get announcements from all company between specified date (e.g. https://stock-insights-sigma.vercel.app/api/announcements?sd=2023-07-26&ed=2023-07-28)           |
| https://stock-insights-sigma.vercel.app/api/announcements/[SCRIP_CD]?sd=[yyyy-mm-dd]&ed=[yyyy-mm-dd] | Get announcements from specific company between specified date                                                                                                   |
| https://stock-insights-sigma.vercel.app/api/announcements?sd=[yyyy-mm-dd]                            | Get announcements from all company after specific date (sorting can also be used) (e.g. https://stock-insights-sigma.vercel.app/api/announcements?sd=2023-07-26) |
| https://stock-insights-sigma.vercel.app/api/announcements/[SCRIP_CD]?sd=[yyyy-mm-dd]                 | Get announcements from specific company after specific date                                                                                                      |

### All the above apis have critical announcement variant also, just replace 'announcements' with 'critical-announcements'

(e.g. https://stock-insights-sigma.vercel.app/api/critical-announcements)
