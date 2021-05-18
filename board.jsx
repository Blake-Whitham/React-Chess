<div>
  {board.map((row, i) => {
    return (
      <span style={{ display: 'flex', flexDirection: 'row' }}>
        {row.map((sqr, j) => {
          if (i % 2 === 0) {
            if (j % 2 === 0) {
              return (
                <div
                  style={{
                    height: '40px',
                    width: '40px',
                    backgroundColor: 'black',
                  }}
                  row={i}
                  sqr={j}
                ></div>
              );
            }
            return (
              <div
                style={{
                  height: '40px',
                  width: '40px',
                  backgroundColor: 'white',
                }}
                row={i}
                sqr={j}
              ></div>
            );
          }
          if (i % 2 === 1) {
            if (j % 2 === 1) {
              return (
                <div
                  style={{
                    height: '40px',
                    width: '40px',
                    backgroundColor: 'black',
                  }}
                  row={i}
                  sqr={j}
                ></div>
              );
            }
            return (
              <div
                style={{
                  height: '40px',
                  width: '40px',
                  backgroundColor: 'white',
                }}
                row={i}
                sqr={j}
              ></div>
            );
          }
        })}
      </span>
    );
  })}
</div>;
