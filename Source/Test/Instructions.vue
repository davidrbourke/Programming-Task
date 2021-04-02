<template>
    <div class="instructions container-fluid">
        <div class="row">
            <div class="col-xl-5 col-md-10">
                <p>Implement a reusable data table class library.</p>
                <p>A data table might be used in our software to help with data analysis. For example, the front wing of a Formula1 car has a number of air pressure sensors and the data from these sensors would be processed and stored in a database for analysis by aerodynamicists.</p>
                <p>Our application might load the data from the database into a data table structure with a column for each of the pressure sensors. With the data in memory in the application further mathematical analysis can be performed and the results displayed in tabular or graphical formats.</p>
                <p>The task is to create a class library that encapsulates a data table structure. In this exercise the user interface is there to provide a mechanism to test your code; we are not expecting data visualisation solutions.</p>
                <p>The purpose of the task is to assess what you think is good software with respect to design, structure, coding standards, conventions etc. The code you deliver should:</p>
                <ul>
                    <li>Compile</li>
                    <li>Run</li>
                    <li>Execute the functions you implement correctly when tested</li>
                </ul>
                <p>We appreciate that these tasks are somewhat contrived and vague. As such, we expect that you will have to make assumption and impose constraints or caveats on how your code is executed.</p>
                <p>The <router-link to="Test">Test</router-link> page contains several forms that will give you some ideas for functions that your class library should provide. Don't feel obliged to implement them all but also feel free to add different functions entirely if you think they might be useful.</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

export default 
{
}

</script>

<style lang="scss" scoped>

.instructions {
    margin-top: 1rem;
}

</style>
