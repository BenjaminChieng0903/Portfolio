const request = require('supertest');
const app = require('../index');

describe('send email api', ()=>{
    it('should return a 200 if success', async()=>{
   const res =  await request(app).post('/api/v1/home/submit').send(
    {

    }
   );

   expect(res.status).toBe(200);
    })
})