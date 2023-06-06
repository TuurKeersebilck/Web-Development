const tables = [];

	const createTable = () => {
		const numberInput = document.getElementById("numberInput");

		// Controleert of het opgegeven getal geldig is
		if (isNaN(numberInput.value)) {
			alert("Please enter a valid number");
			return;
		}

		// Maakt een tabel met tafels aan
		const table = document.createElement("div");
		table.classList.add("tafel");

		const tableHeader = document.createElement("div");
		tableHeader.classList.add("header");
		tableHeader.textContent = `Tafel van ${numberInput.value} aangemaakt op: ${new Date().toLocaleTimeString()}`;
		table.appendChild(tableHeader);

		for (let i = 1; i <= 10; i++) {
			const row = document.createElement("div");
			row.classList.add("row");
			row.textContent = `${numberInput.value} x ${i} = ${numberInput.value * i}`;
			table.appendChild(row);

            if(i % 2 === 0){
                row.classList.add('even');
            }
		}

		tables.push(table);
		displayTables();
		
		numberInput.value = "";
	}

	const displayTables = () => {
		const tablesDiv = document.getElementById("tables");

		tablesDiv.textContent = "";

		for (let i = 0; i < tables.length; i++) {
			tablesDiv.appendChild(tables[i]);
		}
	}