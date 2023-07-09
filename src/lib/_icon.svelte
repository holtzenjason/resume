<script>
  import { mobileShow } from "./store.js";
  import {
    UserIcon,
    MailIcon,
    PhoneCallIcon,
    MapPinIcon,
    LinkedinIcon,
    MessageCircleIcon,
  } from "svelte-feather-icons";
  export let name;
  export let size = "24";
  export let color;
  const icons = {
    user: UserIcon,
    email: MailIcon,
    phone: PhoneCallIcon,
    address: MapPinIcon,
    linkedin: LinkedinIcon,
    discord: MessageCircleIcon,
  };
</script>

{#if !$mobileShow}
  <span style="color: {color};">
    <svelte:component this={icons[name]} {size} />
  </span>
{/if}
