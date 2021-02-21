import { rest } from 'msw'

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    const { username } = req.body

    return res(
      ctx.delay(3000),
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: 'John',
        lastName: 'Maverick',
      })
    )
  }),

  rest.get('/users', (req, res, ctx) => {
    return res(
      // ctx.delay(3000),
      ctx.json([
        {
          id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
          firstName: 'John',
          lastName: 'Maverick',
        },
        {
          id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fd2',
          firstName: 'John',
          lastName: 'Kowalsky',
        },
        {
          id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fdc',
          firstName: 'Anna',
          lastName: 'Maliniak',
        }
      ])
    );
  })
]
