import Reach from'react'
import Aus from'../../hoc/Aux'

const layout = (props) => (
    <Aux>
    <div> Toolbar, SideMenue, Backdrop </div>
    <main>
        {/* this is where the main conent goes */}
        {props.children}
    </main>
    </Aux>
)

export default Layout