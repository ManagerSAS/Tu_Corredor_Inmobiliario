<template>
  <div>
    <TheHeader/>
    <MobileNavigation/>
    <Welcome/>
    <Services class="mb-10"/>
    <Featured style="background-color: #faf6c2"/>
    <FormProperty/>
    <About class="bg-About" />
    <FormContact/>
    <TheFooter class="bg-Footer"/>
  </div>
</template>

<script>
import Welcome from '~/components/Welcome.vue';
import About from '~/components/About.vue';
import Featured from '~/components/Featured.vue';
import FormContact from '~/components/FormContact.vue';
import FormProperty from '~/components/FormProperty.vue';
import Services from '~/components/Services.vue';
import TheFooter from '~/components/TheFooter.vue';
import TheHeader from '~/components/TheHeader.vue';
import MobileNavigation from '~/components/MobileNavigation.vue';

export default {
  components:{
    TheHeader,
    Services,
    Featured,
    FormProperty,
    About,
    FormContact,
    TheFooter,
    Welcome,
    MobileNavigation
}

}
</script>
