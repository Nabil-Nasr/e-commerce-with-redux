import Loading from "./Loading";

const ResultsWrapper = ({ loading, items, error, customCondition, children }) => {
  return (
    <>
      {
        !loading && items.length && (customCondition || !error) ?
          children

          : !loading && !items.length && !error ?
            <div className="text-center fs-1 mt-4">لا يوجد نتائج</div>

            : !loading && error ?
              <div className="text-center fs-1 my-3 p-2 text-danger ">تعذر الوصول</div>

              : <div className="my-5"><Loading /></div>
      }
    </>
  );
};
export default ResultsWrapper;