<script setup lang="ts">

</script>

<template>

    <h1>This is demo page</h1>

    <hr />

    <h2>Text demo</h2>
    <h1>This is Heading 1 </h1>
    <h2>This is Heading 2 </h2>
    <h3>This is Heading 3 </h3>
    <h4>This is Heading 4 </h4>
    <h5>This is Heading 5 </h5>
    <h6>This is Heading 6 </h6>
    <p>
        <strong>This is a bolded text.</strong>
        This text is back to normal
        <i>but this is an italics.</i>
        <a href="https://jbzd.com.pl/"> There can be a link as well! </a>
    </p>
    <blockquote> This is quote </blockquote>

    <hr />

    <h2>List demo</h2>

    <ol>
        <li>This is an element of an ordered list</li>
        <li><b>You can put anything inside</b></li>
        <li>Even other lists
            <ul>
                <li>And then nest them to your liking</li>
                <li>But in my option
                    <ul>
                        <li>This might be an overkill
                            <ul>
                                <li> And it isn't really used that much</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ol>

    <hr />

    <h2>Table demo</h2>

    <table>
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
        </tr>
        <tr>
            <td>Row 1, Column 1</td>
            <td>Row 1, Column 2</td>
        </tr>
        <tr>
            <td>Row 2, Column 1</td>
            <td>Row 2, Column 2</td>
        </tr>
    </table>

    <hr />

    <h2> Media demo</h2>
    <img src="https://marketanulka.pl/userdata/public/gfx/113000/5903870004671.jpg" alt="kuflowe mocne xd" />
    <br />
    <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY">
    </iframe>

    <hr />

    <h2>Interactive form demo</h2>

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

<style scoped>
</style>
