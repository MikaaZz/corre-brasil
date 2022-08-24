import { getStaffs, getAddStaffsButton } from '../support/app.po';

describe('StaffsApps', () => {
  beforeEach(() => cy.visit('/'));

  it('should display staffs', () => {
    getStaffs().should((t) => expect(t.length).equal(2));
    getAddStaffsButton().click();
    getStaffs().should((t) => expect(t.length).equal(3));
  });
});
