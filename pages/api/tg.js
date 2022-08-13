import TG from '../../src/services/tg'

export default function handler(req, res) {
  TG(JSON.parse(req.body));
  res.status(200).json('test');
}