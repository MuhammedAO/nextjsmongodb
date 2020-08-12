import Head from '../components/head';
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { Button, Card } from 'semantic-ui-react'


const Index = ({notes}) => {
  return (
    <div className="notes-container">
      <Head title="Home" />
      <h1>Notes</h1>
      <div className="grid wrapper">
      {notes.map(note => {
        return (
          <div key={note._id}>
            <Card>
              <Card.Content>
                <Card.Header>
                  <Link href={`/${note._id}`}>
                    <a>{note.title}</a>
                  </Link>
                </Card.Header>
              </Card.Content>
              <Card.Content extra>
                <Link href={`/${note._id}`}>
                  <Button primary>View</Button>
                </Link>
                <Link href={`/${note._id}/edit`}>
                  <Button primary>Edit</Button>
                </Link>
              </Card.Content>
            </Card>
          </div>
        )
      })}
      </div>
    </div>
  )
};


//getInitialProps is a nextJs fn that will allow us to run some code before the actual component gets rendered to the page
//make Api request to fetch the data needed for this Page, the data will be returned to the prop of this page
Index.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/notes')

  const { data } = await res.json()

  return { notes: data }
}

export default Index