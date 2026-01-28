import React, { Suspense, lazy } from "react";
import Loading from "@/components/Loading";

const modules = import.meta.glob("/src/pages/**/index.jsx");

const LazyComponent = (name) => {
  const path = `/src/pages/${name}/index.jsx`;
  const importer = modules[path];

  if (!importer) {
    console.error(`[LazyComponent] 页面不存在: ${path}`);
    return () => <div>页面不存在</div>;
  }

  const LazyComp = lazy(importer);

  return (
    <Suspense fallback={<Loading />}>
      <LazyComp />
    </Suspense>
  );
};

export default LazyComponent;
