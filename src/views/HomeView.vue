<script setup lang="ts">
</script>

<template>

  <h2> O mnie </h2>

  <hr />

  <p>
    Jestem <strong><u> Giga Potężnym </u></strong>programistą a co?

  <h3>Przydatne linki aż trzy</h3>

  <ol>
    <li><a
        href="https://www.linkedin.com/in/wojciech-gryzel-239b4b243?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FCKZZ385SqGTQsZ0mF3RPA%3D%3D">
        Linkedin </a></li>
    <li><a href="https://breakmycake.wordpress.com/"> Wordpress </a></li>
    <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"> Mój filmik - portfolio</a></li>
  </ol>
  </p>

  <hr />

  <h2> Umiejętności </h2>

  <p>
    <li>WordPress</li>
    <li>Canva</li>
    <li>MS Office</li>
    <li>J. Angielski - C1</li>
    <li>J. Francuski - B2</li>
    <li>Fast Typing</li>
  </p>

  <hr />

  <h2> Wykształcenie </h2>

  <p><strong>Lata 2017-2020</strong> Uniwersytet im. Adama Mickiewicza w Poznaniu</p>
  <p><strong>Lata 2013-2017</strong> Zespół Szkól Technicznych w Szczecinku</p>

  <hr />

  <h2> Doświadczenie </h2>

  <p><strong>Od 2020 </strong> Sąd Rejonowy Poznań Stare Miasto <i>Protokolant Sądowy</i></p>

  <hr />

  <h2> Kontakt </h2>

  <p><strong>E-Mail</strong> wojtekgryzel@gmail.com</p>
  <p><strong>Telefon</strong> + 48 725512563</p>

  <h3> Formularz kontaktowy:</h3>

  <form>
    <label for="name">Name: </label>
    <input type="text" id="name" name="name" /><br />
    <label for="surname">Surname: </label>
    <input type="text" id="surname" name="surname"><br />
    <label for="country">Choose a Country</label>

    <select name="country" id="country">
      <option value="">Country roads take me home</option>
      <option value="poland">Onioland</option>
      <option value="Spain">Chorizoland</option>
    </select><br />

    <label for="story">Send a Message </label>

    <textarea id="story" name="story" rows="5" cols="33">
            Provide a message
        </textarea><br />

    <button class="submit" type="submit">
      Submit form
    </button>

  </form>

</template>
