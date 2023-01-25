import React from 'react';

const Main = () => {
  return (
    <section className="section">
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child notification is-warning">
            <p className="title">Ex praesentium.</p>
            <p className="subtitle">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur, aliquid unde magni perspiciatis quidem ad assumenda
              necessitatibus pariatur! Ipsam modi officia tenetur id magnam
              impedit nobis, quae inventore odit dolore! Excepturi libero veniam
              ducimus quas fuga! Suscipit ad error veniam dolorum fugiat optio
              corporis quo nobis animi minus? Saepe perspiciatis cumque ex
              veniam quisquam maxime repellendus necessitatibus doloremque illum
              tempore!
            </p>
            <figure className="image is-3by4">
              <img src={`${process.env.PUBLIC_URL}/victor-rosario.jpg`} />
            </figure>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-info">
            <figure className="image is-3by4">
              <img src={`${process.env.PUBLIC_URL}/daniel-perunov.jpg`} />
            </figure>
            <p className="title">Lorem ipsum dolor</p>
            <p className="subtitle">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
              officia ducimus quidem repellat voluptatum distinctio deleniti
              necessitatibus fugiat, earum dolore eos recusandae dolorum sequi
              perferendis reiciendis alias totam? Velit, ipsa! Consequatur
              voluptas voluptates quam nam, sint sed eius, quos beatae iusto
              officiis maiores expedita quaerat adipisci rem exercitationem esse
              fugit, facere aperiam obcaecati totam ipsa. Error qui aut rem
              quaerat! Ut, iusto commodi! Eligendi sit consectetur animi nobis,
              et eaque fugit doloremque suscipit exercitationem error nostrum.
              Blanditiis numquam quaerat ex, explicabo expedita aliquid
              similique tempora in commodi rem molestias ipsam!
            </p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-success">
            <div className="content">
              <p className="title">Culpa dolorem.</p>
              <p className="subtitle">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
                officia itaque maxime ipsum quibusdam iure fugiat alias voluptas
                voluptates, magnam blanditiis id enim dolorem aliquid suscipit
                porro eos minus? Delectus! Perferendis laboriosam fuga ex ad a
                non maxime minus impedit sapiente hic magnam, dicta culpa
                eligendi perspiciatis cum suscipit ullam eos repellat. Aliquid
                eveniet totam facere, consectetur et voluptates mollitia!
                Laboriosam ea, architecto excepturi magni inventore rem sed
                doloremque animi placeat quisquam alias? Reiciendis quo nesciunt
                illo esse quisquam exercitationem consequuntur sunt, sit beatae
                deserunt qui cumque, quae aperiam. Esse.
              </p>
              <figure className="image is-3by4">
                <img src={`${process.env.PUBLIC_URL}/nima-sarram.jpg`} />
              </figure>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Main;
