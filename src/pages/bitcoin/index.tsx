import style from './styles.module.scss';

export default function Bitcoin({ data }) {
  console.log(data)

  return (
    <>
      <h1>Bitcoin {data.name}</h1>
      {data.data.map((el,i) => {
        return (
          <div key={i}>
            <h1>
              {el.value}
            </h1>
            <h2>
              {el.value_classification}
            </h2>
          </div>
        )
      })}
      <div className={style.graph}></div>
    </>
  )
}

export async function getServerSideProps (){
  const res = await fetch('https://api.alternative.me/fng/');
  const data = await res.json();
  
  return { props: { data }}
}