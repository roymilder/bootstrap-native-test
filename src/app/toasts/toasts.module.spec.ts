import { ToastsModule } from './toasts.module';

describe('ToastsModule', () => {
  let toastsModule: ToastsModule;

  beforeEach(() => {
    toastsModule = new ToastsModule();
  });

  it('should create an instance', () => {
    expect(toastsModule).toBeTruthy();
  });
});
