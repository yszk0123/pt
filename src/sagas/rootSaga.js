import { authenticateWithPaper } from './paper';

export default function* rootSaga() {
  yield authenticateWithPaper();
}
