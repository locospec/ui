import { useEffect, useRef } from "react";
import { useInfiniteFetch } from "../LensProvider/hooks/useInfiniteFetch";

const RawDisplay: React.FC = () => {
  const { flatData, fetchNextPage, hasNextPage, isFetching } = useInfiniteFetch(
    {}
  );
  const ref = useRef<any>();

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const div = e.target as HTMLDivElement;

    if (div.scrollHeight - div.scrollTop - div.clientHeight < 100) {
      if (hasNextPage && !isFetching) {
        fetchNextPage();
      }
    }
  };

  useEffect(() => {
    if (ref?.current) {
      const { scrollHeight, scrollTop, clientHeight } = ref.current;
      if (scrollHeight - scrollTop - clientHeight < 200) {
        fetchNextPage();
      }
    }
  }, []);

  return (
    <div
      className="le-w-full le-h-full le-flex le-flex-col le-gap-y-1 le-overflow-y-scroll"
      onScroll={handleScroll}
      ref={ref}
    >
      {flatData.map((data: any, index: number) => (
        <div
          className="le-text-sm le-inline-flex le-border le-bg-black le-text-green-400"
          key={index}
        >
          {JSON.stringify(data, null, 2)}
        </div>
      ))}
    </div>
  );
};

RawDisplay.displayName = "RawDisplay";

export { RawDisplay };
