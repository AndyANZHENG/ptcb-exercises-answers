var asia = {
  countries: {
    India: {
      Mumbai: {
        population: 18.5
      }
    },
    China: {
      Beijing: {
        population: 21.5
      },
      'Hong Kong': {
        population: 7.3
      }
    }
  }
};
// 1) - 3)
console.log(asia.countries.India.Mumbai.population);
console.log(asia.countries.China.Beijing.population);
console.log(asia.countries.China['Hong Kong'].population);

var familyBankValues = {
  familyMembers: {
    Mother: {
      'account number': 8096291,
      accountBalance: 10000000
    },
    Father: {
      'account number': 8096292,
      accountBalance: 9999999
    },
    Sister: {
      'account number': 8096293,
      accountBalance: 10000
    },
    'Step Brother': {
      'account number': 8096292,
      accountBalance: 15000
    }
  }
};

// 4) - 6)
console.log(familyBankValues.familyMembers.Mother['account number']);
console.log(familyBankValues.familyMembers.Father.accountBalance);

var accountNumber =
  familyBankValues.familyMembers['Step Brother']['account number'];
var accountBalance =
  familyBankValues.familyMembers['Step Brother'].accountBalance;

var accountDetails = [accountNumber, accountBalance];
console.log(accountDetails);
var accountDetailsPush = [];
accountDetailsPush.push(accountNumber);
accountDetailsPush.push(accountBalance);
console.log(accountDetailsPush);

/**
ANSWERS
18.5
21.5
7.3
8096291
9999999
[ 15000, 8096292 ]
[ 15000, 8096292 ]
 */
