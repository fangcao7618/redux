import Mock from 'mockjs';

// const contactsAPI = process.env.NODE_ENV === 'development' ? '/data' :
// 'https://demo1443058.mockable.io/codeproject_tutorial/api/contacts';

Mock.setup({timeout: '1200-2600'});

Mock.mock('/data', {
    data: {
        first: '@FIRST',
        middle: '@FIRST',
        last: '@last',
        full: '@first @middle @last'
    }
});

Mock.mock('/number', {
    data: {
        "num|1-100": 123
    }
});

Mock.mock('/contacts', {
    code: 200,
    'contacts|10': [
        {
            "name": "@name",
            "surname": "@last",
            "gender": "male",
            "address": "@county(true)",
            "age": 27,
            "title": "mr",
            "phone": /^1[385][1-9]\d{8}/,
            "birthday": {
                "dmy": "@datetime('MM/dd/yyyy A HH:mm:ss')",
                "mdy": "08/09/1990",
                "raw": 650246246
            },
            "email": "@email",
            "password": "Arroyo90%+",
            "credit_card": {
                "expiration": "12/21",
                "number": "8199-7234-4646-1728",
                "pin": 4608,
                "security": 451
            },
            "photo": "https://uinames.com/api/photos/male/@integer(1,10).jpg"
        }
    ]
});