<p align="center">
  <img src="public/icons/icon-192x192.png" alt="ReadingList" width="96">
</p>
<h1 style="text-align: center" align="center">ReadingList</h1>
<p align="center">A minimal application for tracking your reading history.</p>

## Data Structure

```json
{
  "books": {
    "byId": {
      1: {
        "title": "string",
        "author": "string",
        "date_started": "datetime",
        "date_finished": "datetime"
      }
    },
    "allIds": [1]
  }
}
```
