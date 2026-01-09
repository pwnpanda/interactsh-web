'use client';

import React, { Suspense, useMemo, memo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import RequestsTable from '@/components/requestsTable';
import { Data } from '@/lib/types/data';
import { Filter } from '@/lib/types/filter';
import {
  RepoSidebarListFallback,
  RepoSidebarListErrorFallback,
} from '@/helpers/fallback-loaders';

interface RequestsTableWrapperP {
  data: Data[];
  handleRowClick: (id: string) => void;
  selectedInteraction: string;
  filter: Filter;
}

const RequestsTableWrapper = memo(({
  data,
  handleRowClick,
  selectedInteraction,
  filter,
}: RequestsTableWrapperP) => {
  const reversedData = useMemo(() => [...data].reverse(), [data]);

  return (
    <div className="requests_table_container">
      <ErrorBoundary
        FallbackComponent={({ resetErrorBoundary }) => (
          <RepoSidebarListErrorFallback retry={resetErrorBoundary} />
        )}
      >
        <Suspense fallback={<RepoSidebarListFallback />}>
          <RequestsTable
            data={reversedData}
            handleRowClick={handleRowClick}
            selectedInteraction={selectedInteraction}
            filter={filter}
          />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
});

export default RequestsTableWrapper;

