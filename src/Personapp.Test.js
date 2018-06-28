import ShallowRenderer from 'react-test-renderer/shallow';
import Person from './person.js';
// in your test:
const renderer = new ShallowRenderer();
renderer.render(<Person />);
const result = renderer.getRenderOutput();

//expect(result.type).toBe('div');
expect(result.props.children[3].props.onClick).toEqual(increment);
