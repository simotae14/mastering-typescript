const color: [number, number, number] = [255, 0, 45];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, 'OK'];
// goodRes[0] = '200'
goodRes.push(123)
goodRes.pop()
goodRes.pop()
goodRes.pop()


const responses: HTTPResponse[] = [[404, 'Not Found'], [200, 'OK']];