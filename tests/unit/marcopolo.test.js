const request = require('supertest');

const app = require('../../server');

describe('TEST', () => {
    const expectedOutput = '1,2,3,marco,5,6,polo,marco,9,10,11,marco,13,polo,15,marco,17,18,19,marco,polo,22,23,marco,25,26,27,marcopolo,29,3'
    it('should get a result for users', () => {
      const user1 = Promise.resolve(request(app)
        .get('/play?numbers=30'));
      const user2 = Promise.resolve(request(app)
        .get('/play?numbers=30'));
      const user3 = Promise.resolve(request(app)
        .get('/play?numbers=30'));
      const user4 = Promise.resolve(request(app)
      .get('/play?numbers=30'));

    return Promise.all([user1, user2, user3,user4]).then((values) => {
        expect(values[0].statusCode).toEqual(200);
        expect(values[1].statusCode).toEqual(200);
        expect(values[2].statusCode).toEqual(200);
        expect(values[3].statusCode).toEqual(200);

        expect(values[0].text).toEqual(expectedOutput);
        expect(values[1].text).toEqual(expectedOutput);
        expect(values[2].text).toEqual(expectedOutput);
        expect(values[3].text).toEqual(expectedOutput);
    });
    });
  });
