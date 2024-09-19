import styled from 'styled-components'

const LoadingStyled = styled.div`
     font-family: "Roboto", sans-serif;
     inline-size: 1240px;
     margin: auto;

     display: grid;
     grid-template-columns: repeat( auto-fill, minmax(361px, 1fr));
     gap: 2rem;

     .card {
	 display: flex;
	 flex-direction: column;
	 flex-basis: 300px;
	 flex-shrink: 0;
	 flex-grow: 0;
	 max-width: 100%;
	 background-color: #fff;
	 box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .15);
	 border-radius: 10px;
	 overflow: hidden;
	 margin: 1rem;
}
    .card-img {
        padding-bottom: 56.25%;
        position: relative;
    }
    .card-img img {
        position: absolute;
        width: 100%;
    }
    .card-body {
        padding: 1.5rem;
    }
    .card-title {
        font-size: 1.25rem;
        line-height: 1.33;
        font-weight: 700;
    }
    .card-title.skeleton {
        min-height: 28px;
        border-radius: 4px;
    }
    .card-intro {
        margin-top: 0.75rem;
        line-height: 1.5;
    }
    .card-intro.skeleton {
        min-height: 72px;
        border-radius: 4px;
    }
    .skeleton {
        background-color: #e2e5e7;
        background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
        background-size: 40px 100%;
        background-repeat: no-repeat;
        background-position: left -40px top 0;
        animation: shine 1s ease infinite;
    }
    @keyframes shine {
        to {
            background-position: right -40px top 0;
        }
    }
`

function Loading() {
    return (
        <LoadingStyled>
        <div className="card">
            <div className="card-img skeleton"></div>
            <div className="card-body">
                <h2 className="card-title skeleton"> </h2>
                <p className="card-intro skeleton"></p>
            </div>
	    </div>
        <div className="card">
            <div className="card-img skeleton"></div>
            <div className="card-body">
                <h2 className="card-title skeleton"> </h2>
                <p className="card-intro skeleton"></p>
            </div>
	    </div>
        <div className="card">
            <div className="card-img skeleton"></div>
            <div className="card-body">
                <h2 className="card-title skeleton"> </h2>
                <p className="card-intro skeleton"></p>
            </div>
	    </div>
        <div className="card">
            <div className="card-img skeleton"></div>
            <div className="card-body">
                <h2 className="card-title skeleton"> </h2>
                <p className="card-intro skeleton"></p>
            </div>
	    </div>
        <div className="card">
            <div className="card-img skeleton"></div>
            <div className="card-body">
                <h2 className="card-title skeleton"> </h2>
                <p className="card-intro skeleton"></p>
            </div>
	    </div>
        <div className="card">
            <div className="card-img skeleton"></div>
            <div className="card-body">
                <h2 className="card-title skeleton"> </h2>
                <p className="card-intro skeleton"></p>
            </div>
	    </div>
        <div className="card">
            <div className="card-img skeleton"></div>
            <div className="card-body">
                <h2 className="card-title skeleton"> </h2>
                <p className="card-intro skeleton"></p>
            </div>
	    </div>
        </LoadingStyled>
    )
}

export default Loading
