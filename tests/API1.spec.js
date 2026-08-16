import{test,expect} from '@playwright/test';


test('APItesting demo',async({request})=>{

    const response = await request.post(
        'https://automationexercise.com/api/createAccount',
        {

        form:{
            name: 'Siva',
                email:`siva${Date.now()}@gmail.com`,
                password: 'Pass123',
                title: 'Mr',
                birth_date: '10',
                birth_month: '5',
                birth_year: '1995',
                firstname: 'Siva',
                lastname: 'Shanthi',
                company: 'ABC',
                address1: 'Hyderabad',
                address2: 'India',
                country: 'India',
                zipcode: '500001',
                state: 'Telangana',
                city: 'Hyderabad',
                mobile_number: '9876543210'
        }
    }
);
expect(response.status()).toBe(200);
const data = JSON.parse(await response.text());
console.log(data);
expect(data.responseCode).toBe(201);
expect(data.message).toContain('User created!')

});