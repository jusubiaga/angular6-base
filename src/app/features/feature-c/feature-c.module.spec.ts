import { FeatureCModule } from './feature-c.module';

describe('FeatureCModule', () => {
  let featureCModule: FeatureCModule;

  beforeEach(() => {
    featureCModule = new FeatureCModule();
  });

  it('should create an instance', () => {
    expect(featureCModule).toBeTruthy();
  });
});
