var user1 = {
	name: 'u1',
	accNum: 123,
	pass: 123,
	balance: 1000.0,
};

var user2 = {
	name: 'u2',
	accNum: 456,
	pass: 456,
	balance: 2000.0,
};

function deposit() {
	let accountName = prompt('Enter your account name: ');
	let accNum = parseInt(prompt('Enter your account number: '));
	let pass = parseInt(prompt('Enter your passcode: '));

	if (accountName == user1.name && accNum == user1.accNum && pass == user1.pass) {
		alert(`Signed in as ${user1['name']}`);
		let depositMoney = parseFloat(prompt('How much money are you depositing?'));
		user1.balance += depositMoney;
		alert(`Success, Your new account balance is: ${user1[balance]}`);
	} else if (accountName == user2.name && accNum == user2.accNum && pass == user2.pass) {
		alert(`Signed in as ${user2['name']}`);
		let depositMoney = parseFloat(prompt('How much money are you depositing?'));
		user2.balance += depositMoney;
		alert(`Success, Your new account balance is: ${user2[balance]}`);
	} else alert('Error signing in. Please check your credentials.');
}

var condition = true;
while (condition) {
	(function () {
		var choice = prompt(
			'Choose operation: \n 1 for Balance \n 2 for Deposit \n 3 for Withdraw \n 4 for Transfer \n 5 for Exit'
		);

		if (choice == 1) {
			deposit();
		} else if (choice == 2) {
			// withdraw();
		} else if (choice == 3) {
			// balance();
		} else if (choice == 4) {
			// transfer();
		} else if (choice == 5) {
			condition = !condition;
		}
	})();
}
