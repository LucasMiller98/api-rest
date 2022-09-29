import multer from 'multer'
import { extname, resolve } from 'path'

const randomValues = () => Math.floor(Math.random() * 10000 + 20000)

export default {
  fileFilter: (req, file, callback) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return callback(new multer.MulterError('O arquivo precisa ser png ou jpg.'))
    }

    return callback(null, true)
  },
  storage: multer.diskStorage({ // salva no disco do server(PC)
    destination: (req, file, callback) => {
      callback(null, resolve(__dirname, '..', '..', 'uploads'))
    },
    filename: (req, file, callback) => {
      callback(null, `${Date.now()}_${randomValues()}${extname(file.originalname)}`)
    },
  }),
}
