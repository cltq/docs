'use client';

import { ApiReferenceReact } from '@scalar/api-reference-react';

export function ApiPlayground() {
  return (
    <div className="not-prose -mx-4 md:-mx-6 lg:-mx-8">
      <ApiReferenceReact
        configuration={{
          url: 'https://api.applefumi.xyz/openapi.yaml',
          hideDownloadButton: true,
          baseServerURL: 'https://api.applefumi.xyz',
        }}
      />
    </div>
  );
}
