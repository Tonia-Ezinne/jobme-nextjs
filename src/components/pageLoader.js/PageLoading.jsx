import React from 'react'

const PageLoading = () => {
  return (
    <div class="flex flex-col md:flex-row md:items-start md:justify-start justify-center mx-auto text-center bg-neutral-300 w-96 h-96 animate-pulse rounded-xl p-4 gap-4">
      <div class="bg-neutral-400 w-full h-32 animate-pulse rounded-md"></div>
      <div class="flex flex-col gap-2">
        <div class="bg-neutral-400 w-full h-4 animate-pulse rounded-md"></div>
        <div class="bg-neutral-400 w-4/5 h-4 animate-pulse rounded-md"></div>
        <div class="bg-neutral-400 w-full h-4 animate-pulse rounded-md"></div>
        <div class="bg-neutral-400 w-2/4 h-4 animate-pulse rounded-md"></div>
      </div>
    </div>
  );
}

export default PageLoading