window.addEventListener('load', (event) => {
  getDataGenTable('https://potion-api.now.sh/table?id=36489b04bed1424eaad8a0122985e41d')
});

async function getDataGenTable(url) {
  const response = await fetch(url);
  const data = await response.json();
  tablegen('myskedj', data);
}

async function tablegen(divname, sheetData) {
  const container = document.getElementById(divname);
  const table = document.createElement("table");
  table.setAttribute("id", divname + "-table");
  table.setAttribute("class", "schedule");
  container?.appendChild(table);

  class tableheader {
    constructor(week, date, topic, readings, wout, wdue) {
      this.week = week;
      this.date = date;
      this.topic = topic;
      this.readings = readings;
      this.wout = wout;
      this.wdue = wdue;
    }
  }
  let header = new tableheader('Week','Date','Topic','Readings','Work Out','Work Due');
  let numcols = Object.keys(header).length

  function generateTableHead(table, firstrow) {
		let thead = table.createTHead();
		let row = thead.insertRow();
    Object.entries(firstrow).forEach(([key, value]) => {
      let th = document.createElement("th");
      if (value.includes("Work Out") || value.includes("Work Due") ) {
        th.setAttribute("style", "min-width: 90px;");
      } else if (value.includes("Date")) {
        th.setAttribute("style", "min-width: 60px;");
      }
      th.innerHTML = value;
      row.appendChild(th);
    });
	}

  generateTableHead(table, header)

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function generateTableBody(table, data) {
		let tbody = table.createTBody();
		data.forEach((row, row_idx) => {
			let tr = tbody.insertRow();
      for (var i = 0; i < numcols; i++) {
        let td = document.createElement("td");
        switch(i) {
          case 0:
            'Week' in row["fields"] ? td.innerHTML = row["fields"]["Week"] : td.innerHTML = "";
            td.setAttribute("style", "text-align: center;")
            break;
          case 1:
            if ('Date' in row["fields"]) {
              let d = new Date(row["fields"]["Date"]["start_date"] + "T15:40:00");
              td.innerHTML = monthNames[d.getMonth()] + " " + d.getDate();
            } else {
              td.innerHTML = "";
            }
            break;
          case 2:
            if ('Lecture Topic' in row["fields"]) {
              td.innerHTML = row["fields"]["Lecture Topic"];
              if (row["fields"]["Lecture Topic"].includes("NO CLASS")) {
                tr.setAttribute("class", "table-skedj-success")
                td.setAttribute("style", "color: #578160; font-weight: bold;")
              } else if (row["fields"]["Lecture Topic"].includes("No Recitation")) {
                td.setAttribute("style", "color: #cccccc; font-weight: bold; font-style: italic;")
              } else if (row["fields"]["Lecture Topic"].includes("Project Presentations")) {
                tr.setAttribute("class", "table-skedj-primary")
                td.setAttribute("style", "color: #5099e9; font-weight: bold;")
              }
            } else {
              td.innerHTML = "";
            }
            if ('Slides' in row["fields"]) {
              td.appendChild( document.createTextNode( '\u00A0' ) );
              let span = document.createElement('span');
              span.className = 'badge badge-slides';
              span.innerHTML = '<a href="' + row["fields"]["Slides"] + '">Slides</a>';
              td.append(span)
            }
            if ('Type' in row["fields"]) {
              if (row["fields"]["Type"] == "exam") {
                tr.setAttribute("class", "table-skedj-warning")
                td.setAttribute("style", "color: #c99512; font-weight: bold;")
              }
            }
            break;
          case 3:
            'Additional Reading' in row["fields"] ? td.innerHTML = row["fields"]["Additional Reading"] : td.innerHTML = "";
            break;
          case 4:
            'Work Out' in row["fields"] ? td.innerHTML = row["fields"]["Work Out"] : td.innerHTML = "";
            break;
          case 5:
            'Work Due' in row["fields"] ? td.innerHTML = row["fields"]["Work Due"] : td.innerHTML = "";
            break;
        }
        tr.appendChild(td);
      }
		});
	}

  generateTableBody(table, sheetData)

}
