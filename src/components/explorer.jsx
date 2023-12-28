import PropTypes from 'prop-types';
import Column from './column'
import './styles/Components.css'

export default function Explorer(props) {
  return (
    <section id='explorer'>
      <Column colA='1' setpathA={props.setpathA}/>
    </section>
  )
}

Explorer.propTypes = {
  setpathA: PropTypes.func
}