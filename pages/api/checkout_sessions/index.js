import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req,res){
    if(req.method==='POST')
    {
        try {
            let lineitem = []
            // console.log(req.body)
            const items = req?.body
            
            items.forEach(item => {
                
                const transformedItem = {
                    price_data: {
                      currency: 'inr',
                      product_data: {
                        images: [item.thumbnail],
                        name: item.name,
                        description: item.description,
                      },
                      unit_amount: item.price * 100,
                    },
                    quantity: item.quantity,
                  };
                  lineitem.push(transformedItem)
            })
            
            const session = await stripe.checkout.sessions.create({
                mode: "payment",
                payment_method_types:["card"],
                line_items: lineitem ?? [],
                success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/cart`,
            })
            res.status(200).json(session)
        } catch (error) {
            res.status(500).json({statusCode: 500, message: error.message})
        }
    }else{
        res.setHeader('Allow','POST')
        res.status(405).end('Method Not Allowed')
    }
}