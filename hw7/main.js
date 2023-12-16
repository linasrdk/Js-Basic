function memoize(defaultValue = null) {
  let memoizedData = defaultValue;

  function getMemoizedData() {
    return memoizedData;
  }

  function setMemoizedData(value) {
    memoizedData = value;
  }
   
  return [getMemoizedData, setMemoizedData];
}

const [getData, setData] = memoize("3");
console.log(getData());
