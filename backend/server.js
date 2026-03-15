const express = require('express');
const cors = require('cors');
const {createClient} = require('@supabase/supabase-js');

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(
    "",
    ""
)

app.post("/register", async (req, res) => {
    const {username, email, password} = req.body;

    const { data } = await supabase
        .from("users")
        .insert([{ username, email, password }])
        .select()

    res.json(data);
});

app.post("/login", async (req, res) => {
    const {email, password} = req.body;

    const { data } = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .eq("password", password)
        .single()

    res.json(data);
});

app.listen(4000, () => {
    console.log("Server running on port 4000");
});