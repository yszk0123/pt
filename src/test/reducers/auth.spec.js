import reducer from '../../app/reducers/auth';
import { authenticateWithPaperSuccess } from '../../app/actions/paper';

describe('root', () => {
  it('should handle ', () => {
    expect(
      reducer(undefined, authenticateWithPaperSuccess('access-token')),
    ).toEqual({
      accessToken: 'access-token',
    });
  });
});
