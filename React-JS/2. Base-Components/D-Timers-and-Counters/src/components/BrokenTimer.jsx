

export default function BrokenTimer(){
    let timer = 1;

  //Does not working  
    setInterval(() => {
        timer++
    }, 1000)
    return(
        <>
            <h2>Broken Timer</h2>
            <div>0</div>
            <hr />
        </>
    )
}