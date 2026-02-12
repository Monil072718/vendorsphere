import { NextRequest } from 'next/server';

export function getTenantSlug(request: NextRequest): string | null {
  // 1. Try to get from header
  const headerSlug = request.headers.get('x-vendor-slug');
  if (headerSlug) return headerSlug;

  // 2. Try to get from subclass/subdomain (if applicable in future)
  
  // 3. Try to get from query param (optional, for testing)
  const url = new URL(request.url);
  const querySlug = url.searchParams.get('vendor');
  if (querySlug) return querySlug;

  return null;
}
