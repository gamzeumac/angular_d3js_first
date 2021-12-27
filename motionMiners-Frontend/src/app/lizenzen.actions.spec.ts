import * as fromLizenzen from './lizenzen.actions';

describe('yLizenzens', () => {
  it('should return an action', () => {
    expect(fromLizenzen.yLizenzens().type).toBe('[Lizenzen] Y Lizenzens');
  });
});
