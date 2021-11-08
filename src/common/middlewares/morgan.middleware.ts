import { Request, Response } from 'express';
import * as morgan from 'morgan';
import * as chalk from 'chalk';
import * as dayjs from 'dayjs';

morgan.token('date', (req, res, tz) => {
  return dayjs().format('YYYY-MM-DD, hh:mm a');
});

export function MorganMiddleware(
  tokens: morgan.TokenIndexer,
  req: Request,
  res: Response,
) {
  return [
    chalk.hex('#d800e0').bold(tokens.method(req, res)),
    chalk.hex('#ffb142').bold(tokens.status(req, res)),
    chalk.hex('#ff5252').bold(tokens.url(req, res)),
    chalk.hex('#2ed573').bold(tokens['response-time'](req, res) + ' ms'),
    chalk.hex('#f78fb3').bold('@ ' + tokens.date(req, res)),
    chalk.yellow(tokens['remote-addr'](req, res)),
    chalk.hex('#fffa65').bold('from ' + tokens.referrer(req, res)),
    chalk.hex('#1e90ff')(tokens['user-agent'](req, res)),
  ].join(' ');
}
