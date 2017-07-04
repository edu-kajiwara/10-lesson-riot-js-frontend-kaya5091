<fibonacci>
    <h2>{result}</h2>
    <a class="btn btn-primary" onclick={click}>Fibonacci</a>
    <script>
        this.result = 0;
        click(event){
            //Advanced: ボタンが押下されるたびに、最初の二項は 0, 1 であり、以後どの項もその直前の2つの項の和を求めるロジックを実装する
            console.log('button click')
        }
    </script>
</fibonacci>