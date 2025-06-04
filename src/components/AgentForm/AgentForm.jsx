import './AgentForm.css'

function AgentForm() {
  return (
    <div className='agent-form'>
        <p className='agent-type-label'>Agent Type:</p>
        <select className='agent-type'>
            <option>মাস্টার এজেন্ট</option>
            <option>সুপার এজেন্ট </option>
            <option>সাব এডমিন</option>
        </select>
        <p className='agent-id-label'>Agent ID:</p>
        <input type="text"  className='agent-id-input'/>
        <div className='agent-form-btn'>
            <button>Submit</button>
        </div>
    </div>
  )
}

export default AgentForm