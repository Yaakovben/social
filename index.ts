import exp, {Express} from 'express'

import 'dotenv/config'



const app:Express = exp()




app.listen(process.env.PORT)

