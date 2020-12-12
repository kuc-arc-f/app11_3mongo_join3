class IndexRow extends React.Component {
    componentDidMount(){
//        console.log(this.props.obj)
    }
    render(){
// console.log(this.props.obj.breads )
        var bread_name = "";
        var price_total = 0;
        if(this.props.obj.breads.length > 0){
            bread_name = this.props.obj.breads[0].name ;
            price_total = this.props.obj.breads[0].price * parseInt(this.props.obj.order_num);
        }
        return (
        <tr>
            <td>
                <a href={"/bread_orders/show/"+ this.props.obj._id}><h3>{this.props.obj._id}</h3>
                </a>
                bread : {bread_name} <br />
                num: {this.props.obj.order_num } <br />
                Price: {price_total} JPY<br />
                {this.props.obj.created_at }<br />
            </td>
            <td>
            </td>
        </tr>
        )
    }
}

