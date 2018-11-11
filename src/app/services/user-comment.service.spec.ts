import { TestBed } from '@angular/core/testing';

import { UserCommentService } from './user-comment.service';

describe('UserCommentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCommentService = TestBed.get(UserCommentService);
    expect(service).toBeTruthy();
  });
});
